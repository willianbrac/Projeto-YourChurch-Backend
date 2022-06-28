import { Request, Response } from "express";
import { container } from "tsyringe";

import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

class RefreshTokenController {
  async handler(request: Request, response: Response): Promise<Response> {
    const token =
      request.body.token ||
      request.headers["x-acess-token"] ||
      request.query.token;

    const refreshTokenUseCase = container.resolve(RefreshTokenUseCase);

    const novoToken = await refreshTokenUseCase.execute(token);

    return response.status(201).json(novoToken);
  }
}

export { RefreshTokenController };
