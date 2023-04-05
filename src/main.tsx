import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

import { Home } from '@pages/Home';

import '@styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

// Note: only have one router, but allows to add new routes to the project
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	}
]);

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<RecoilRoot>
			<ToastContainer
				closeOnClick
				draggable
				hideProgressBar
				pauseOnFocusLoss
				pauseOnHover
				autoClose={5000}
				newestOnTop={false}
				position="top-right"
				rtl={false}
				theme="dark"
			/>

			<RouterProvider router={router} />
		</RecoilRoot>
	</React.StrictMode>
);
