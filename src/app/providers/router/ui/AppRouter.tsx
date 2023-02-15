import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/*<Route path={'/about'} element={<AboutPage/>}/>*/}
                {/*<Route path={'/'} element={<MainPage/>}/>*/}
                {Object.values(routeConfig).map(({path, element}) => {
                    return <Route key={path} path={path} element={(
                        <div className='page-wrapper'>
                            {element}
                        </div>
                    )}/>
                })}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;