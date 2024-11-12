

export default function Databinding() {
    var product = [
        { catagory: "Mobiles", Company: ["samsung", "realme", "i phone"] },
        { catagory: "Fashion", Company: ["LV", "prada", "puma"] }
    ];
    return (
        <div className="container">
            <div className="text-center mt-5">
                <button data-bs-target="#modal" data-bs-toggle="modal" >Open</button>
            </div>
            <div className="modal" id="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Brading Sector</h2>
                        </div>
                        <div className="modal-body">
                            <div className="bg-warning rounded-3">
                                <ol> {
                                    product.map(item =>

                                        <div>
                                            <li>{item.catagory}</li>
                                            <ul>
                                                {
                                                    item.Company.map(c =>
                                                        <li>{c}</li>

                                                    )
                                                }
                                            </ul>
                                        </div>

                                    )
                                }
                                </ol>
                            </div>
                        </div>

                    </div>
                </div>
            </div>





        </div>
    )

}
