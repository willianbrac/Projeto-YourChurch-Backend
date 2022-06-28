import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        // eslint-disable-next-line consistent-return
        filename: (request, file, callback) => {
          const permissions = ["image/jpeg", "image/jpg", "image/png"];
          if (permissions.includes(file.mimetype)) {
            const fileHash = crypto.randomBytes(16).toString("hex");
            const fileName = `${fileHash}-${file.originalname}`;
            return callback(null, fileName);
          }
        },
      }),
    };
  },
};
