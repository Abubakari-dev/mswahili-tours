import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/sections/ScrollToTop';
import { Tours } from './pages/Tours';
import { Kilimanjaro } from './pages/Kilimanjaro';
import { Zanzibar } from './pages/Zanzibar';
import { Activities } from './pages/Activities';
import { Safaris } from './pages/Safaris';
import { About } from './pages/About';
import { TravelInfo } from './pages/TravelInfo';
import { Book } from './pages/Book';
import { NotFound } from './pages/NotFound';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-warm-neutral text-navy antialiased">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-[108px] md:pt-[108px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true,          element: <Tours />        },
      { path: 'tours',        element: <Tours />        },
      { path: 'kilimanjaro',  element: <Kilimanjaro />  },
      { path: 'zanzibar',     element: <Zanzibar />     },
      { path: 'activities',   element: <Activities />   },
      { path: 'safaris',      element: <Safaris />      },
      { path: 'about',        element: <About />        },
      { path: 'travel-info',  element: <TravelInfo />   },
      { path: 'book',         element: <Book />         },
      { path: '*',            element: <NotFound />     },
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
