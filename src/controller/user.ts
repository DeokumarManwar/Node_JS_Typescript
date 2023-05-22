import { Request, Response } from "express";
import userModel from "../models/user";
import {
  createUser,
  findUser,
  findAndUpdate,
  deleteUser,
} from "../services/users.service";

const homeDetail = async (req: Request, res: Response) => {
  const user = userModel.myWorld();
  //   let myData = await userModel.find();
  // ---- ADD -----
  //   const user = await createUser({ name: "string", dept: "string" });
  // ------ Update ------
  //   const user = await findAndUpdate(
  //     { name: "deokumar" },
  //     { name: "Deokumar" },
  //     { new: true }
  //   );

  // -------- Find ---------
  //   const user = await findUser({ _id: "644e79b590e28b62399306b7" });

  // --------Delete ------------
  //   const user = await deleteUser({ _id: "644e6a6390e28b62399306b5" });
  let ob = { x: 12, y: 30 };
  let data = sumData(ob);
  //   let data = sumData(12, 24);
  res.json({
    message: "Hello World this is Home Page",
    data: data,
    myData: user,
  });
};

interface params {
  x: number;
  y: number;
}

type sumCheck = (x: params) => number;

// const sumData = (x: number, y: number): number => {
//   return x + y;
// };

const sumData: sumCheck = (ob: params) => {
  return ob.x + ob.y;
};
export { homeDetail };
