import multer from "multer"

const storage = multer.memoryStorage()
export const Multer = multer({ storage: storage })