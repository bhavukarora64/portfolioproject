import { Rocket, LockKeyholeIcon, Layout, CloudLightningIcon } from 'lucide-react'

export default function Introduction() {
  const styles = `
    @keyframes hand-wiggle {
      0% {
        transform: scale(1.0) rotate(-30deg);
      }
      50% {
        transform: scale(1.5) rotate(30deg);
      }
      100% {
        transform: scale(1.0) rotate(-30deg);
      }
    }

    @keyframes float-up-right {
      from {
        transform: translateY(0) translateX(0);
        opacity: 0;
      }
      to {
        transform: translateY(100%) translateX(350%);
        opacity: 1;
      }
    }

    @keyframes float-up {
      from {
        transform: translateY(0);
        opacity: 0;
      }
      to {
        transform: translateY(100%) translateX(0%) ;
        opacity: 1;
      }
    }

    @keyframes float-down-right {
      from {
        transform: translateY(0) translateX(0);
        opacity: 0;
      }
      to {
        transform: translateY(100%) translateX(250%) ;
        opacity: 1;
      }
    }

    @keyframes float-down {
      from {
        transform: translateY(0);
        opacity: 0;
      }
      to {
        transform: translateY(100%) translateX(150%) ;
        opacity: 1;
      }
    }

    .hand-wiggle {
      animation: hand-wiggle 10s ease-in-out;
      animation-timeline: view();
      animation-range: entry 100% cover 100%;
    }

    .float-up-right {
      animation: float-up-right 1.2s ease-out forwards;
      animation-timeline: view();
      animation-range: entry 60% cover 100%;
    }

    .float-up {
      animation: float-up 1.2s ease-out forwards;
      animation-timeline: view();
      animation-range: entry 60% cover 100%;
    }

    .float-down-right {
      animation: float-down-right 1.2s ease-out forwards;
      animation-timeline: view();
      animation-range: entry 60% cover 100%;
    }

    .float-down {
      animation: float-down 1.2s ease-out forwards;
      animation-timeline: view();
      animation-range: entry 60% cover 100%;
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <div className='relative flex flex-col justify-center items-center py-54'>
      <div className='relative'>
          <span className="text-4xl gap-4 flex">
            <div className='hand-wiggle'>
              👋
            </div>
            <p className='text-lg md:text-2xl font-light text-gray-400'>
              Hey, I'm Bhavuk Arora, coding and crafting products and I'm a
            </p>
          </span>

          <h1 className='text-5xl md:text-6xl font-bold'>Full-Stack Web Developer</h1>
          <h1 className='text-3xl md:text-4xl font-medium'>
            specialized in scalable, user-centric web apps that prioritize
          </h1>
          <span className='relative text-xl font-medium'>
            <h1 className='text-3xl md:text-4xl'>requirements.</h1>

          <span className='absolute left-[0%] top-[100%] rotate-[0deg] flex gap-2 bg-yellow-200 text-yellow-900 rounded-full px-4 py-2 float-up-right'>
            <Rocket className='size-6' />
            performance
          </span>

          <span className='absolute left-[0%] top-[100%] rotate-[deg] flex gap-2 bg-pink-200 text-pink-900 rounded-full px-4 py-2 float-up'>
            <LockKeyholeIcon className='size-6' />
            security
          </span>

          <span className='absolute left-[0] top-[100%] rotate-[0deg] flex gap-2 bg-green-200 text-green-900 rounded-full px-4 py-2 float-down-right'>
            <Layout className='size-6' />
            accessiblity
          </span>

          <span className='absolute left-[0%] top-[100%] rotate-[0deg] flex gap-2 bg-purple-200 text-purple-900 rounded-full px-4 py-2 float-down'>
            <CloudLightningIcon className='size-6' />
            real-time
          </span>          
          </span>
        </div>
      </div>
    </>
  );
}
