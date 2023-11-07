import React from 'react';
import Navigation  from './component/Navigation/page';
 
export default function FoodDelivery({ children }: { children: React.ReactNode }) {
    return (
        <>
                <Navigation/>
            <main>{children}</main>
        </>
    );
}