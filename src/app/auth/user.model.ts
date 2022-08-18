export class User {
  constructor(
    private idToken: string,
    private email: string,
    private localId: string,
    private expiresIn: Date
  ) {}
}
