/**
 * @desc
 * @param dbTable string
 */
export const selectAll = (dbTable: string): string => {
  return `select * from ${dbTable};`;
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
  console.log("got here", body);
  return `insert into user_role (first_name, last_name, email, user_password) values ('${firstName}', '${lastName}', '${email}', '${password}')
  returning public_id, email, user_name;`;
};
