import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/logo.webp"
        width={250}
        height={50}
        className="hidden md:block"
        alt="company logo"
      />
    </div>
  );
}
