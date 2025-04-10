import { useRef } from "react";

export default function Projects(props){
      const projectData = [
        {
          title: 'Brainly',
          description: 'AI-Powered Second Brain.',
          image: 'https://as1.ftcdn.net/v2/jpg/02/14/39/38/1000_F_214393844_8TuJzbiHWQT8tRqamM2WZYg2M1XM2fh0.jpg',
          url: 'https://brainly-v1-frontend.vercel.app/',
          screenshots: [
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1744283527/Screenshot_2025-04-10_at_13.02.24_diolld.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1744283528/Screenshot_2025-04-10_at_13.05.31_gi6z5b.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1744283527/Screenshot_2025-04-10_at_13.02.52_a1h7fi.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1744283527/Screenshot_2025-04-10_at_13.04.38_wpar5z.png",
          ]
        },
        {
          title: 'Stage Scouts',
          description: 'Discover the best viewes in Town.',
          image: 'https://thumbs.dreamstime.com/b/stage-constructions-flat-line-icon-scene-event-equipment-rental-sign-thin-linear-logo-concert-music-festival-vector-139181397.jpg',
          url: 'https://stage-scouts.vercel.app/',
          screenshots: [
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1744283528/Screenshot_2025-04-10_at_13.05.51_wcndr2.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1744283528/Screenshot_2025-04-10_at_13.06.34_oytwk5.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1744283528/Screenshot_2025-04-10_at_13.06.45_sopiyl.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1744283528/Screenshot_2025-04-10_at_13.06.54_tqrrfs.png",
          ]
        },
        {
          title: 'FLEET4U',
          description: 'Manage Your Fleet Maintenance from Start to Finish.',
          image: 'https://static.vecteezy.com/system/resources/previews/002/552/679/non_2x/delivery-cargo-service-logistic-truck-transport-line-style-icon-free-vector.jpg',
          url: 'https://fleet-management-5eyg.vercel.app/',
          screenshots: [
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1744284424/Screenshot_2025-04-10_at_13.20.44_odblcs.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1744284424/Screenshot_2025-04-10_at_13.21.40_qcu9vx.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1744284424/Screenshot_2025-04-10_at_13.21.57_zcnwcy.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1744284423/Screenshot_2025-04-10_at_13.21.26_uatku0.png",
          ]
        }
      ]

    return(
        <>
            <div id="project-section" className='grid grid-cols-12 gap-4 justify-items-center mx-54 py-24'>
            <h1 className='col-span-12 text-7xl font-bold text-center mb-16'>Projects</h1>
            {projectData.map((project, index) => {
              return (
                <div key={index} className='group relative z-10 col-span-4'>
                <div onClick={() => (clickhandler(project))} className='bg-white border-2 border-black drop-shadow-xl shadow-black flex justify-center items-center w-84 h-32 rounded-2xl gap-2 px-8 py-8 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1'>
                    <img src={project.image} className='w-16 h-16 rounded-full' />
                    <div className='flex flex-col'>
                    <p className='font-bold'>{project.title}</p>
                    <p className='text-blue-600 text-sm'>{project.url}</p>
                    </div>
                </div>

                <div className='absolute top-0 left-0 w-84 h-32 rounded-2xl bg-yellow-500 border-2 border-black -z-10 transition-all duration-300 group-hover:left-2 group-hover:top-2'></div>

                <div className='absolute top-0 left-0 w-84 h-32 rounded-2xl bg-purple-500 border-2 border-black -z-20 transition-all duration-300 group-hover:left-4 group-hover:top-4'></div>
                </div>
            )
            })}
            </div>
        </>
    )

    function clickhandler(project){
      // currProject.current = e.project;
      props.setVisible((prevValue) => !prevValue)
      props.setProjectData(project)
    }
}