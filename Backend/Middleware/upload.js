import multer from 'multer';

const storage = multer.memoryStorage(); // store image in memory as a buffer
const upload = multer({ storage });

export default upload;
