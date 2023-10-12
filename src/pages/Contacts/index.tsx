// import MainPhoto from '../../images/mainPhoto.jpg';
import MainPhoto from '../../images/mainphoto.svg';
import CV from '../../../public/pdf/EKATERINA GORELIK CV FRONTEND DEV.pdf';
// import download from '../../images/download.svg';
export function Contacts() {
  return (
    <>
      <div className="flex items-center justify-around gap-6 p-4 h-80 bg-slate-500">
        <div className="flex items-center h-64 w-fit">
          <img src={MainPhoto} alt="my-photo" className="w-64 bg-transparent rounded-full" />
        </div>
        <div className="h-64 w-fit">
          <h1 className="text-5xl">Ekaterina Gorelik</h1>
          <h2 className="text-3xl">Front-end developer</h2>
          <div className="flex flex-col pt-3">
            <span className="block"> E-mail: ekategorelik@gmail.com</span>
            <span className="block">Phone: +375(25) 530-37-70 (telegram, viber)</span>
            <span className="block">
              Linkedin: Ekaterina Gorelik (https://www.linkedin.com/in/ekaterina-gorelik-1752b41b4)
            </span>
            <span className="block">GitHub: https://github.com/Kkuuttii</span>
          </div>

          <div className="flex gap-3 pt-3">
            <button className="rounded-xl bg-gradient-to-br from-[#29E9F5] via-[#7A64FF] to-[#FF508B] px-3 py-2  text-white transition duration-200 hover:shadow-lg hover:shadow-[#7A64FF]/50 w-42  ">
              <a
                href={CV}
                download="Ekaterina Gorelik VC Front-end"
                className="flex items-center justify-between gap-2 "
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  // stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-6 animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  ></path>
                </svg>
                <span className="text-sm font-light ">Download CV</span>
              </a>
            </button>

            <div className="relative flex items-center justify-end">
              <button className="rounded-xl bg-gradient-to-br from-[#29E9F5] via-[#7A64FF] to-[#FF508B] px-3 py-2  text-white transition duration-200 hover:shadow-lg hover:shadow-[#7A64FF]/50 w-42 flex items-center justify-between  gap-3 ">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-6 animate-pulse"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  ></path>
                </svg>
                <span className="text-sm font-light ">Message me</span>
              </button>
              <span className="absolute flex h-4 w-4 -top-1 right-1 transform translate-x-2.5 -translate-y-2.5s">
                <span className="absolute inline-flex w-full h-full bg-purple-400 rounded-full opacity-75 animate-ping"></span>
                <span className="absolute inline-flex w-4 h-4 bg-purple-500 rounded-full"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
