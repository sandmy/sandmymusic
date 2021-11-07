import Loading from "components/utils/Loading";
import { getSheetData } from "lib/getSheetData";
import { useEffect, useState } from "react";
import Artist from "./artist";

const Artists = () => {

    const [data, setData] = useState();

    useEffect(() => {
        const getData = async () => {
            const result = await getSheetData('https://docs.google.com/spreadsheets/d/e/2PACX-1vQM9BaUA44uAor-GIfWyXlrElE4OD_rVR5MqP3-6njL_6MwptgpDPh6cRPqEMW14c6ZXFLboPm0yw5s/pub?output=tsv');
            setData(result);
            // console.log(result);
        }
        getData();
    }, []);

    return (
        <>
            {data ? (
                <div className='grid:6 gap' >
                    {data.map((artist, artistkey) => (
                        <Artist key={artistkey} {...artist} />
                    ))}
                </div>
            ) : <Loading />}
        </>
    )

}

export default Artists;