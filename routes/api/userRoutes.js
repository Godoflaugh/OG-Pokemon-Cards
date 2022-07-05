const router = require('express').Router()
const bcrypt = require('bcrypt')

const User = require('../../models/User')

router.get('/', async (req, res) => {
  req.session.reload((err) => {
    if (err) console.log("err" + err)
    console.log(req.headers)
    console.log(req.session)
    res.status(200).json({currUserId: req.session.userId})
  })
})

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body
  
  console.log(username)
  const existingUser = await User.findOne({ where: { username: username }})
  console.log(existingUser)
  if (existingUser == null) {
    return res.status(400).json({ error: "Username is not in the db"})
  }

  const isPasswordCorrect = await bcrypt.compare(password, existingUser.passwordHash)
  if (isPasswordCorrect) {
     // Login / Create a session
     req.session.regenerate((err) => {
      if (err) next(err)
  
      // store user information in session, typically a user id
      req.session.userId = existingUser.id 
      console.log(req.session)
  
      // save the session before redirection to ensure page
      // load does not happen before session is saved
      req.session.save((err) => {
        if (err) return next(err)
        // res.redirect('/')
        res.status(200).json({ success: true })
      })
    })
  } else {
    res.status(400).json({ error: "Password is not correct"})
  }
})

// CREATE a new user
router.post('/signup', async (req, res, next) => {
  try {
    const passwordHash = await bcrypt.hash(req.body.password, 10)
    console.log(passwordHash)
    const createdUser = await User.create({ username: req.body.username, passwordHash })
    console.log(createdUser.id)

    // Login / Create a session
    req.session.regenerate((err) => {
      if (err) next(err)
  
      // store user information in session, typically a user id
      req.session.userId = createdUser.id 
  
      // save the session before redirection to ensure page
      // load does not happen before session is saved
      req.session.save((err) => {
        if (err) return next(err)
        // res.redirect('/')
        res.status(200).json({ success: "true" })
      })
    })

  } catch (err) {
    res.status(400).json(err)
  }
})

router.get('/logout', async (req, res, next) => {
  if (req.session.userId) {
    req.session.destroy((err) => {
      if (err) return next(err)

      res.status(200).json({ success: "true" })
    })
  } else {
    res.status(400).json({ error: "This user is not logged in."})
  }
})

module.exports = router
