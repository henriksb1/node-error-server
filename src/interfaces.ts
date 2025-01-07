export interface Route {
  statusCode: number;
  response: {
    error?: string;
    message: string;
  };
}
