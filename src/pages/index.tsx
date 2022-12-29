import * as React from 'react';
import { graphql, useStaticQuery, HeadFC, Link } from 'gatsby';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';

const IndexPage = (props: any) => {
  console.log(props);
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};
  console.log(meta);

  const services = [
    {
      link: '',
      img: 'https://res.cloudinary.com/dvqpgowdv/image/upload/c_scale,w_390/v1672252608/steddytrading.com/valeria-fursa-nY00XO2A8mM-unsplash_w0agex.jpg',
      title: 'Land Survey',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam`,
    },
    {
      link: '',
      img: 'https://res.cloudinary.com/dvqpgowdv/image/upload/c_scale,w_390,h_260/v1672252607/steddytrading.com/towfiqu-barbhuiya-05XcCfTOzN4-unsplash_mykgdf.jpg',
      title: 'Property brokerage',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam`,
    },
    {
      link: '',
      img: 'https://res.cloudinary.com/dvqpgowdv/image/upload/c_scale,w_390,h_260/v1672252608/steddytrading.com/werner-sevenster-JuP0ZG0UNi0-unsplash_eqeulw.jpg',
      title: 'Land sale', // can we do
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam`,
    },
  ];

  const recentProjects = [
    {
      link: 'projects',
      img: 'https://res.cloudinary.com/dvqpgowdv/image/upload/c_scale,w_464,h_310/v1672252607/steddytrading.com/tierra-mallorca-rgJ1J8SDEAY-unsplash_csynwb.jpg',
      title: 'land sale',
    },
    {
      link: 'projects',
      img: 'https://res.cloudinary.com/dvqpgowdv/image/upload/c_scale,w_464,h_310/v1672252607/steddytrading.com/tierra-mallorca-rgJ1J8SDEAY-unsplash_csynwb.jpg',
      title: 'land sale',
    },
    {
      link: 'projects',
      img: 'https://res.cloudinary.com/dvqpgowdv/image/upload/c_scale,w_464,h_310/v1672252607/steddytrading.com/tierra-mallorca-rgJ1J8SDEAY-unsplash_csynwb.jpg',
      title: 'land sale',
    },
    {
      link: 'projects',
      img: 'https://res.cloudinary.com/dvqpgowdv/image/upload/c_scale,w_464,h_310/v1672252607/steddytrading.com/tierra-mallorca-rgJ1J8SDEAY-unsplash_csynwb.jpg',
      title: 'land sale',
    },
  ];

  return (
    <Layout>
      <Hero />

      <section className='bg-gray-200'>
        <div className='p-9 flex flex-col container mx-auto items-center'>
          <h2 className='uppercase text-3xl p-5 text-center after:block after:content after:bg-amber-400 after:w-16 after:h-0.5 after:mt-4 after:mx-auto'>
            Our services
          </h2>
          <p className='px-10 py-7 text-center max-w-5xl'>
            With over 15 years experience and real focus on customer
            satisfaction, you can rely on us for your next renovation, driveway
            sett or home repair. We provide a professional service for private
            and commercial customers
          </p>

          <div className='grid grid-cols-3 bg-white'>
            {services.map((service, idx) => (
              <div key={idx} className=''>
                <Link to={service.link}>
                  <img src={service.img} className='block w-full' />
                </Link>
                <Link to={service.link}>
                  <h4 className='uppercase text-center py-5 font-medium after:block after:content after:bg-amber-400 after:w-10 after:h-0.5 after:mt-4 after:mx-auto'>
                    {service.title}
                  </h4>
                </Link>
                <p className='px-10 text-center mb-10'>{service.description}</p>
              </div>
            ))}
          </div>

          <Link
            to='/services'
            className='px-4 py-2 mt-10 rounded-3xl text-white uppercase bg-amber-400 border border-amber-400 hover:bg-white hover:text-black'
          >
            View all services
          </Link>
        </div>
      </section>

      <section className='bg-white'>
        <div className='py-9 flex flex-col items-center'>
          <h2 className='uppercase text-3xl p-5 text-center after:block after:content after:bg-amber-400 after:w-16 after:h-0.5 after:mt-4 after:mx-auto'>
            Recent Projects
          </h2>

          <p className='px-10 py-7 text-center max-w-5xl'>
            Here are a few of many projects we have completed for our customers.
            We provide a professional service which includes consultation, free
            estimate, design, supply of materials and installation.
          </p>

          <div className='grid grid-cols-4 w-full h-80'>
            {recentProjects.map((project, idx) => (
              <div className='flex items-center justify-center bg-slate-400 bg-center bg-no-repeat bg-cover hover:bg-gray-500' style={{ backgroundImage: `url('${project.img}')`}}>
              { /* <img key={idx} src={project.img} /> */ }
                  <div className='flex flex-col items-center justify-center'>
                    <p className='text-white'>{project.title}</p>
                    <Link
                      to='/projects'
                      className='uppercase border border-white text-white'
                    >
                      View project
                    </Link>
                  </div>
              </div>
            ))}
          </div>

          <div className='flex flex-row mt-10'>
            <h3 className='text-center'>
              <span className='uppercase text-xl font-medium px-7'>
                Explore our projects
              </span>

              <Link
                to='/projects'
                className='px-4 py-2 mt-10 rounded-3xl text-white uppercase bg-amber-400 border border-amber-400 hover:bg-white hover:text-black'
              >
                View all projects
              </Link>
            </h3>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

/*
export const query = graphql`
  {
    site {
    siteMetadata {
    title
  }
    }
  }
`;
*/
