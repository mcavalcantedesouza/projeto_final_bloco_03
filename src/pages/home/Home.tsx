
function Home(){
    return(
       <>
       <div className="bg-cyan-200 flex justify-around items-center h-full">
            <div className="flex flex-col justify-center items-center gap-y-6">
                <h1 className="font-bold text-5xl">Seja Bem Vindo!</h1>
                <p className="text-2xl">Aqui você encontra Medicamentos e Cosméticos!</p>
            </div>

            <div className="w-[30%]">
                <img src="https://ik.imagekit.io/6ag85zqtd/Farmacia%20da%20Leste/imagem%20farmacia.png?updatedAt=1716990258414" alt="" />
            </div>

      </div>
       </>
    )
}

export default Home;