/**
 * @desc
 * @param dbTable string
 */
export const selectAll = (tableName: string): string => {
  // return `select * from ${tableName};`;
  return `select * from user_account;`;
};

/**
 * @interface
 */
export interface IBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

/**
 * @desc handles insertion into tables
 * @param tableName
 * @param body
 */
export const create = (tableName: string, body: IBody): string => {
  const { firstName, lastName, email, password } = body;
  return `insert into "user_account" (first_name, last_name, email, user_password) values ('${firstName}', '${lastName}', '${email}', '${password}')
  returning public_id, email, user_name;`;
};
