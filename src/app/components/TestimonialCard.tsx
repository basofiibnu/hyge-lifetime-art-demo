import Image from 'next/image';

interface TestimonialCardProps {
  text: string;
  author: string;
  avatar: string;
  bg?: string;
}

export function TestimonialCard({
  text,
  author,
  avatar,
  bg = 'bg-[#FAFAFA]',
}: Readonly<TestimonialCardProps>) {
  return (
    <div
      className={`${bg} hover:bg-[#E9ECF2] transition-colors flex flex-col items-start justify-between rounded-xl shadow-sm p-8 w-full xl:max-w-[342px] h-auto min-h-[315px] shrink-0 mx-2 border border-[#E6E6E6]`}
    >
      <div>
        <div className="flex gap-1 mb-4">
          {'★★★★★'.split('').map((_, i) => (
            <span key={i} className="text-xl">
              ★
            </span>
          ))}
        </div>
        <p className="text-[#3D3D47] text-base font-normal leading-7 tracking-[-0.1px]">
          {text}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Image
          src={avatar}
          alt={author}
          className="w-8 h-8 rounded-full"
          width={32}
          height={32}
        />
        <span className="text-sm font-medium">{author}</span>
      </div>
    </div>
  );
}
