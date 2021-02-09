import { Strategy as LocalStrategy } from 'passport-local'
import { User } from '../db/models/user'

const CustomStrategy = new LocalStrategy((email, password, done) => {
    User.findOne({ email: email }).then((user) => {
        if (!user) {
            done(null, false)
        }
        else {
            user.passwordMatches(password).then((matches) => {
                if (matches) {
                    return done(null, user)
                }
                else {
                    return done(null, false)
                }
            }).catch(error => done(error, false))
        }
    }).catch((error) => done(error, false))
})

export default CustomStrategy