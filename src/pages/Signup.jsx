import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-zinc-50 px-2 font-Poppins md:px-0">
        <form className="flex h-fit max-w-[430px] flex-col gap-3 rounded-lg bg-white px-6 py-8 text-center drop-shadow-lg">
          <h3 className="font-Poppins text-2xl font-semibold text-slate-600">
            Sign Up or Sign In
          </h3>
          <p className="text-slate-500">
            Let's get started with your 30 days free trial
          </p>

          <div className="mt-7 flex flex-col gap-3">
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Password" />
          </div>

          <Button
            className="mt-3 w-full bg-green_light md:text-lg"
            type="submit"
          >
            Sign Up
          </Button>

          <p className="text-sm">
            Already have an account?{" "}
            <span className="cursor-pointer text-green_dark">Sign In</span>
          </p>

          <div className="flex items-center justify-center">
            <span className="or">or</span>
          </div>

          <div className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-md border-[1px] border-slate-500 px-4 py-2">
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
