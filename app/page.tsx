import LoginForm from '@/app/ui/login-form';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex items-center justify-center md:h-screen h-full w-full ">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                        <Image
                          src="/logo.webp"
                          width={500}
                          height={300}
                          className="hidden md:block"
                          alt="Screenshots of the dashboard project showing desktop version"
                        />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Nós somos The Lotus
                      </h4>
                    </div>

                   <LoginForm />
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      Mais que apenas umas empresa
                    </h4>
                    <h2 className=" font-medium">
                     Usuario: user@email.com <br/> Senha: 123456
                    </h2>
                    <br/>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}