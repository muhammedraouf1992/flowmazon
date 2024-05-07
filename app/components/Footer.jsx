import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";
import playstore from "../../public/pay/play.jpg";
import appstore from "../../public/pay/app.jpg";
import payimg from "../../public/pay/pay.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" container mx-auto">
      <div className="flex md:justify-between flex-col md:flex-row">
        <div className="md:space-y-2 md:block flex flex-col items-center space-y-5 mb-5">
          <Link href="/" className="btn-ghost btn text-xl normal-case">
            <Image src={logo} height={40} width={40} alt="Flowmazon logo" />
            Flowmazon
          </Link>
          <h4 className="font-bold text-xl text-slate-600 capitalize">
            Contact
          </h4>
          <div className="contact-details">
            <p className="capitalize">
              address:{" "}
              <span className="font-light text-sm">
                562 wellington road,street32,san francisco
              </span>
            </p>
            <p className="capitalize">
              phone:{" "}
              <span className="font-light text-sm">
                +01 32223 42423/(+91)0129 12412
              </span>
            </p>
            <p className="capitalize">
              hours:{" "}
              <span className="font-light text-sm">10:00-18:00,mon-sat</span>
            </p>
          </div>
          <h4 className="font-bold text-xl text-slate-600 capitalize">
            follow us
          </h4>
          <div className="flex space-x-2 ">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaSnapchatGhost />
          </div>
        </div>
        <div className="flex md:space-x-10 flex-col md:flex-row md:items-start md:space-y-0 space-y-5 items-center text-center md:text-left md:mt-0 mt-5">
          <div className="footer-col1">
            <h4 className=" text-lg capitalize text-black font-bold mb-4">
              about
            </h4>
            <ul className="text-sm space-y-1 font-light capitalize">
              <li>about us</li>
              <li>delivery information</li>
              <li>privacy policy</li>
              <li>Terms & conditions</li>
              <li>contact us</li>
            </ul>
          </div>
          <div className="footer-col2">
            <h4 className=" text-lg capitalize text-black font-bold mb-4">
              my account
            </h4>
            <ul className="text-sm space-y-1 font-light capitalize">
              <li>sign in</li>
              <li>view cart</li>
              <li>my wishlist</li>
              <li>track my order</li>
              <li>help</li>
            </ul>
          </div>
          <div className="footer-col3">
            <div className=" text-lg capitalize text-black font-bold mb-4">
              <h4>install app</h4>
            </div>
            <div>
              <p className="text-md font-light capitalize">
                from app store or google play
              </p>
              <div className="flex gap-2 mt-2">
                <Image
                  src={playstore}
                  height={150}
                  width={150}
                  alt="playstore"
                  className="border-primary border-2 rounded-md"
                />
                <Image
                  src={appstore}
                  height={150}
                  width={150}
                  alt="playstore"
                  className="border-primary border-2 rounded-md"
                />
              </div>
              <p className="text-md font-light capitalize mt-5">
                secured payment
              </p>
              <Image
                src={payimg}
                height={30}
                width={200}
                alt="playstore"
                className="mt-2 md:mx-0 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <h6 className="text-center capitalize text-sm md:my-3 mt-10 mb-3">
        made by &copy;{" "}
        <Link href={"https://raouf-portfolio-rosy.vercel.app/"}>
          <span className="text-red-700 font-bold">Raouf 2023</span>
        </Link>{" "}
        Ecommerce Website
      </h6>
    </footer>
  );
}
