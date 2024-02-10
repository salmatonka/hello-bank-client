import React, { useContext } from 'react'
import useTitle from '../../../Hooks/useTitle';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyCard = () => {
    useTitle('MyCard');
    const { user } = useContext(AuthContext);

    const { isLoading,
        refetch,
        data: cards = [],
    } = useQuery({
        queryKey: ["/userAccount", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `https://hello-bank-server.vercel.app/userAccounts?email=${user?.email}`
            );
            const data = await res.json();
            return data;
        },
    });
    // console.log(cards);
    return (
        <div className='bg-gray-900 py-10'>

            {
                cards.length >= 1 ? <>


                    {
                        cards?.map((card) =>
                            <div>

                                {
                                    card?.cardStatus === 'success' ?
                                        <div className='py-20'>
                                            <img src={card?.cards} alt="" className='w-96 mx-auto' />
                                            <h5 className='text-center text-2xl -mt-12 text-gray-100 font-semibold tracking-widest uppercase'>{card.name}</h5>

                                        </div>
                                        :
                                        ' '
                                }
                            </div>
                        )
                    }



                </> : <div>
                    <h1 className="text-4xl text-center font-semibold text-pink-500 py-10">
                        You have no Card.
                    </h1>
                    <div className='py-6 px-14 text-center text-gray-100'>
                        <h2 className='px-6 pb-8 text-3xl font-semibold '>Visa Debit Card</h2>
                        <p className=' text-xl '>Recent advances in debit card technology and security have prompted the Peoples State Bank to make the switch to Visa Debit Cards. With benefits like worldwide acceptance, budget management and Visa's Zero Liability Policy*, you know your card -- and your bank -- are looking out for you. And we know you're going to have questions!</p>
                    </div>
                </div>
            }


        </div>
    );
};


export default MyCard
