import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const test = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
      const request = "1233221"
      return request;
    },
  );