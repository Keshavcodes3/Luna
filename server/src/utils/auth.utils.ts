import bcrypt from 'bcrypt'
export const hashPassword = (password: string, salt = 10) => {
    return bcrypt.hash(password, salt)
}

export const comparePassword = async (password: string, hash: string) => {
    const isCorrect = await bcrypt.compare(password, hash)
    return isCorrect
}