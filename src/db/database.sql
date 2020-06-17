drop table if exists user_account;

create table if not exists user_account
(
  id serial primary key,
  user_id uuid NOT NULL DEFAULT gen_random_uuid(),
  email character varying(50) NOT NULL UNIQUE,
  first_name character varying(50) NOT NULL,
  last_name character varying(50) NOT NULL,
  user_name character varying(50) UNIQUE,
  user_password character varying(255) NOT NULL,
  avatar_url character varying(255),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
)

