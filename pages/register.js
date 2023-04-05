import Signup from '@/components/Signup';

import { gql, useMutation, useQuery } from "@apollo/client";

const REGISTER_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(input: { username: $username, email: $email, password: $password }) {
      jwt
      user {
        username
        email
      }
    }
}`;


export default function SignupRoute() {
  const [handleUserRegistration, { loading, data, error }] = useMutation(REGISTER_USER);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  const handleSignup = async ({ email, password }) => {
    const { data } = await handleUserRegistration({
      variables: {
        username: email,
        email: email,
        password: password,
      },
      onCompleted: async (data) => {
        const response = await fetch("/api/set-cookie", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: data.register }),
        });

        const responseData = await response.json();
        alert("User created successfully and cookie set!")
      },
    });
  };
  return <Signup callback={handleSignup} />;
}
