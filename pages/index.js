import { useAuth } from "../hooks/contextHooks";

export default function Home() {
  const { authUser, signIn, signMeOut } = useAuth();
  return (
    <div>
      {authUser ? (
        <>
          <p>{authUser.email}</p>
          <button onClick={() => signMeOut()}>Sign Out</button>
        </>
      ) : (
        <div>
          <button
            onClick={() => {
              signIn("dhruvroy8@gmail.com", "dhruv1234");
            }}
          >
            SignIn
          </button>
        </div>
      )}
    </div>
  );
}
