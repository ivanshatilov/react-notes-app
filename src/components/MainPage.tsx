interface MainPageProps {
    children: React.ReactNode | React.ReactElement
}

const MainPage: React.FC<MainPageProps> = ({children}) => {
    return ( 
        <main className="bg-gray-50 flex items-center justify-center h-full">
            <div className="bg-neutral-200 shadow-xl w-full h-full  flex justify-center items-center flex-col">
                {children}
            </div>
        </main>
     );
}
 
export default MainPage;