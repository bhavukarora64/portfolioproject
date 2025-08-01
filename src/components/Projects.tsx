
{/* @ts-expect-error: Props are decided */}
export default function Projects(props){
      const projectData = [
        {
          title: 'Brainly',
          description: 'AI-Powered Second Brain.',
          image: 'https://as1.ftcdn.net/v2/jpg/02/14/39/38/1000_F_214393844_8TuJzbiHWQT8tRqamM2WZYg2M1XM2fh0.jpg',
          url: 'https://brainly.bhavukarora.eu/',
          screenshots: [
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1753803830/Screenshot_2025-04-10_at_13.02.24_jst8ba.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1753803829/Screenshot_2025-04-10_at_13.02.52_fv0lgo.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1753803830/Screenshot_2025-04-10_at_13.05.31_fe8n1x.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1753803830/Screenshot_2025-04-10_at_13.04.38_vc9gjy.png",
          ]
        },
        {
          title: 'Stage Scouts',
          description: 'Discover the best viewes in Town.',
          image: 'https://thumbs.dreamstime.com/b/stage-constructions-flat-line-icon-scene-event-equipment-rental-sign-thin-linear-logo-concert-music-festival-vector-139181397.jpg',
          url: 'https://stagescouts.bhavukarora.eu/',
          screenshots: [
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1753803855/Screenshot_2025-04-10_at_13.05.51_haaagv.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1753803841/Screenshot_2025-04-10_at_13.06.34_on44ms.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1753803838/Screenshot_2025-04-10_at_13.06.22_vl88uk.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1753803829/Screenshot_2025-04-10_at_13.06.45_ykwmpu.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1753803830/Screenshot_2025-04-10_at_13.06.54_f5wajx.png"
          ]
        },
        {
          title: 'Fleet4U',
          description: 'Manage Your Fleet Maintenance from Start to Finish.',
          image: 'https://static.vecteezy.com/system/resources/previews/002/552/679/non_2x/delivery-cargo-service-logistic-truck-transport-line-style-icon-free-vector.jpg',
          url: 'https://fleet4u.bhavukarora.eu/',
          screenshots: [
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1753804459/Screenshot_2025-07-29_at_17.50.22_tcaabk.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1753804458/Screenshot_2025-07-29_at_17.51.09_bqokam.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1753804462/Screenshot_2025-07-29_at_17.51.19_gd8flr.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1753804459/Screenshot_2025-07-29_at_17.51.29_ii96fc.png",
            "https://res.cloudinary.com/deljwxfuf/image/upload/v1753804458/Screenshot_2025-07-29_at_17.51.01_qr4bpe.png"
          ]
        }
      ]

    return(
        <>
        <style>{`
          @keyframes slide{
            0% {
              transform: translateY(-50%)
            }
            100% {
              transform: translateY(0%)
            }
          }
          
        .slide{
          animation: slide 1s ease-in-out;
        }
        `}</style>
            <div id="project-section" className='grid grid-cols-12 gap-8 justify-center mx-16 xl:36 2xl:mx-54 py-24 '>
            <h1 className='col-span-12 text-5xl  md:text-7xl font-bold text-center mb-16 slide'>Projects</h1>
            {projectData.map((project, index) => {
              return (
                <div key={index} className='group relative z-10 col-span-12 md:col-span-6 lg:col-span-4 mx-5 sm:mx-0'>
                  <div onClick={() => (clickhandler(project))} className='bg-white border-2 border-black drop-shadow-xl shadow-black flex items-center w-full h-full rounded-2xl gap-2 p-4 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1'>
                      <img src={project.image} className='w-24 h-24 rounded-full' />
                      <div className='flex flex-col'>
                        <p className='font-bold text-xl'>{project.title}</p>
                        <p className='text-blue-600 text-sm w-38 xl:w-52 '>{project.description}</p>
                      </div>
                  </div>

                  <div className='absolute top-0 left-0 w-full h-full rounded-2xl bg-yellow-500 border-2 border-black -z-10 transition-all duration-300 group-hover:left-2 group-hover:top-2'></div>

                  <div className='absolute top-0 left-0 w-full h-full rounded-2xl bg-purple-500 border-2 border-black -z-20 transition-all duration-300 group-hover:left-4 group-hover:top-4'></div>
                </div>
            )
            })}
            </div>
        </>
    )



      {/* @ts-expect-error: Props are decided */}   
      function clickhandler(project){      
        {/* @ts-expect-error: Props are decided */}   
      props.setVisible((prevValue) => !prevValue)
      props.setProjectData(project)
    }
}