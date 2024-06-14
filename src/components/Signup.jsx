import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [formType, setFormType] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInWithGoogle, signIn, createUser, addUserToFs } =
    useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (formType) {
        await createUser(email, password);
        await addUserToFs(password);
      } else {
        await signIn(email, password);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur">
        <form
          className="flex h-fit max-w-[430px] flex-col gap-3 rounded-lg bg-white px-6 py-8 text-center drop-shadow-lg"
          onSubmit={handleSubmit}
        >
          <h3 className="font-Poppins text-2xl font-semibold text-slate-600">
            Sign Up or Sign In
          </h3>
          <p className="text-slate-500">
            Let's get started with your 30 days free trial
          </p>

          <div className="mt-7 flex flex-col gap-3">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            className="mt-3 w-full bg-green_light md:text-lg"
            type="submit"
          >
            {formType ? "Sign up" : "Sign in"}
          </Button>

          <p className="text-sm">
            {formType ? "Already" : `Don't`} have an account? {""}
            <span
              className="cursor-pointer text-green_dark"
              onClick={() => setFormType(!formType)}
            >
              {formType ? "sign in" : "sign up"}
            </span>
          </p>

          <div className="flex items-center justify-center">
            <span className="or">or</span>
          </div>

          <div
            className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-md border-[1px] border-slate-500 px-4 py-2"
            onClick={signInWithGoogle}
          >
            <FcGoogle size={26} />
            <p className="md:text-md text-sm">continue with google</p>
          </div>

          <small className="mt-3 text-wrap font-medium text-slate-500">
            By signing up to create an account I accept company's{" "}
            <span className="text-blue-500">
              Terms of Use and Privacy Policy
            </span>
          </small>
        </form>
      </div>
    </>
  );
};

export default Signup;
