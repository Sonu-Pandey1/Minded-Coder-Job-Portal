import EmailVerifaction from "../Components/EmailVerifaction"
import "./Dashboard.scss"
import Sidebar from "./Sidebar"


function Dashboard() {
  return (
    <>
      <div className="Dashboard-Container container-fulid ">
        <div className="row ">
          <div className="col-1 col-md-2 pt-5 top-0 overflow-hidden z-1 h-100 position-fixed col-sidebar">
            <div className="sidebar-wrapper bg-transparent h-100  overflow-hidden  ">
              <Sidebar />
            </div>
          </div>
          <div className="col-11 col-md-10 col-main">

            <main className="dashboard-wrapper">
              <EmailVerifaction />
              <section className="status-wrapper mt-5 d-flex justify-content-between">
                <div className="status status1 text-center">
                  <h5>Total Resumes</h5>
                  <p>1</p>
                </div>
                <div className="status status2 text-center">
                  <h5>Approved Resumes</h5>
                  <p>1</p>
                </div>
                <div className="status status3 text-center">
                  <h5>Bookmarked</h5>
                  <p>8</p>
                </div>
                <div className="status status4 text-center">
                  <h5>Applied Jobs</h5>
                  <p>2</p>
                </div>

              </section>

              <section className="container-fulid dashboard-footer mt-5 ">
                <div className="row gap-5">
                  <div className="col activities bg-white rounded-3 shadow p-0">
                    <h5 className="p-3 border-bottom">Recent Activities</h5>
                  </div>
                  <div className="col recent-bookmarks bg-white rounded-3 shadow p-0">
                    <h5 className="p-3 border-bottom">Recent BookMarks</h5>
                    <ul className="p-0 ">
                      <li className="list-unstyled border-bottom d-flex justify-content-between align-items-center gap-3">
                        <div className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className=" h-100 w-100 text-primary fs-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path></svg></div>
                        <div className="list-item">
                          <h6 className="">Alex Johnson</h6>
                          <p > Note: sonu apndey</p>
                        </div>
                        <div className="ms-auto ">
                          <p className="badge text-bg-info rounded-pill">Resume</p>
                        </div>
                      </li>
                      <li className="list-unstyled border-bottom d-flex justify-content-between align-items-center gap-3">
                        <div className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className=" h-100 w-100 text-primary fs-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path></svg></div>
                        <div className="list-item">
                          <h6 className="">Warehouse Operative Need</h6>
                          <p> Note: 3 persons</p>
                        </div>
                        <div className="ms-auto ">
                          <p className="badge text-bg-warning rounded-pill">Job</p>
                        </div>
                      </li>
                      <li className="list-unstyled border-bottom d-flex justify-content-between align-items-center gap-3">
                        <div className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className=" h-100 w-100 text-primary fs-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path></svg></div>
                        <div className="list-item">
                          <h6 className="">Warehouse Operative Need</h6>
                          <p> Note: 3 persons</p>
                        </div>
                        <div className="ms-auto ">
                          <p className="badge text-bg-warning rounded-pill">Job</p>
                        </div>
                      </li>
                      <li className="list-unstyled border-bottom d-flex justify-content-between align-items-center gap-3">
                        <div className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className=" h-100 w-100 text-primary fs-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path></svg></div>
                        <div className="list-item">
                          <h6 className="">Warehouse Operative Need</h6>
                          <p> Note: 3 persons</p>
                        </div>
                        <div className="ms-auto ">
                          <p className="badge text-bg-warning rounded-pill">Job</p>
                        </div>
                      </li>
                      <li className="list-unstyled border-bottom d-flex justify-content-between align-items-center gap-3">
                        <div className="icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-primary fs-2 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path></svg></div>
                        <div className="list-item">
                          <h6 className="">Warehouse Operative Need</h6>
                          <p> Note: 3 persons</p>
                        </div>
                        <div className="ms-auto ">
                          <p className="badge text-bg-warning rounded-pill">Job</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

              </section>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ut, adipisci, voluptatibus dicta tempora ipsum at placeat nisi sit unde ex soluta excepturi architecto fuga neque sed quibusdam pariatur ducimus rem fugit! In id culpa, deleniti officia quisquam a vero adipisci voluptas corporis numquam doloremque cum minus laborum! Nemo voluptas libero eum molestiae nam eaque provident neque quis enim hic tempore cumque debitis, eligendi laborum velit possimus ea harum, itaque ut consequuntur. Cumque dignissimos odit qui. Modi, quam fugit, aliquam ut labore nobis hic rerum voluptate dolore consequuntur nesciunt. Expedita, error? Quo blanditiis iure consequatur expedita. Tempore dolores, culpa quis aliquam unde eum dolorum a, nostrum consequatur minus dolorem autem facere officia neque voluptate vitae velit, ipsa voluptatem delectus iusto. Rerum possimus illo quia labore temporibus doloremque non similique delectus quasi dolorum eveniet alias ad consequuntur, quam fugit nulla, adipisci perspiciatis. Quidem aut architecto eaque tempora nemo autem! Officia incidunt quam laborum non veritatis iure ipsum, consequuntur porro nemo sit autem culpa eum facilis libero, dolorum provident optio ratione alias in consectetur perspiciatis reprehenderit saepe ut recusandae? Error, perspiciatis. Quos exercitationem debitis ratione, eum fugit qui ipsam. Iure consequuntur consequatur corrupti error, temporibus doloremque magni officia consectetur cumque est optio! Necessitatibus, dolorem, beatae nobis quo deserunt natus nihil recusandae iure unde veritatis placeat voluptate officiis ipsa nulla animi ea molestiae quae totam provident. Doloremque, incidunt? Mollitia repellat culpa excepturi ad aliquid asperiores, ducimus quae quasi, eligendi nihil minus sit perferendis assumenda, eum ipsam! Odio quia ullam saepe cumque architecto iste, quaerat corporis nemo nobis neque et quod! Asperiores minus quam pariatur repudiandae molestias nostrum quo excepturi animi doloribus consequatur perspiciatis non deleniti quibusdam ad at, amet dicta officia ipsa, voluptatem ratione. Nihil veniam vitae, illo, doloremque reiciendis inventore at laborum explicabo atque reprehenderit consequatur alias consectetur quia tempore nobis doloribus itaque optio amet excepturi! Ipsam voluptatum ut eos quibusdam nihil assumenda excepturi molestias maxime, ipsum eum temporibus impedit dignissimos dolorum nostrum ab consequatur possimus, sed fugit adipisci ipsa et sunt. Adipisci soluta laborum exercitationem similique, repellendus pariatur ex aliquid quas autem vitae. Nemo repellendus debitis animi ipsam dolores tenetur asperiores modi, nisi suscipit et esse perspiciatis maxime consequuntur, molestiae distinctio. Distinctio sequi, id deserunt numquam consectetur, eos assumenda suscipit quibusdam, odit veniam placeat non sapiente necessitatibus porro ea exercitationem minus error? Voluptatem perferendis sint a dolores ullam? Corrupti culpa vitae ut possimus unde eum alias ipsam sequi ullam nam provident, obcaecati sunt dolore aut iure! Vero illum corporis voluptatem maiores veniam dignissimos natus quae laborum rem ducimus vel deserunt nostrum error pariatur minus perspiciatis id recusandae, ratione facilis officiis quod non illo adipisci odio. Atque dolore inventore excepturi repudiandae nesciunt minima sint enim, molestias vero sit sequi incidunt voluptate minus quisquam laudantium neque dolores eligendi veritatis. Beatae odit id assumenda nam. Necessitatibus deserunt facilis fuga, sunt nisi repellendus, blanditiis accusamus veniam deleniti maxime et perferendis numquam? Qui, suscipit ipsum, praesentium est tempore explicabo ullam quod magni repellendus facilis nulla enim cum. Neque omnis eum corporis ullam inventore expedita molestiae ea. Minima sequi iste ipsam officia labore blanditiis velit, voluptatum aliquam quam amet asperiores dicta culpa modi voluptas, ullam rerum? Magni impedit quibusdam distinctio, sed quaerat, iusto molestias voluptatum fugiat assumenda magnam obcaecati praesentium ducimus porro sunt maiores aliquam dicta. Quod incidunt unde consectetur modi impedit in similique fugiat odio sequi, nesciunt aliquid delectus facere minima porro mollitia ipsam officiis perspiciatis nam maxime repudiandae iste? Cum sapiente suscipit vel ab consectetur repudiandae eius quis? Dolorem iste accusantium praesentium consectetur corrupti laudantium, saepe repellendus nobis. Velit, asperiores, alias possimus consequatur rerum natus minus animi excepturi saepe laboriosam commodi aliquid assumenda placeat reiciendis rem, provident at unde neque hic sunt aut quasi modi temporibus. Autem unde vel asperiores et temporibus pariatur, aliquid repellat saepe tempora nobis minus omnis ullam ab eligendi perspiciatis. Ea possimus accusantium dolorem amet quo nostrum, minus excepturi vel animi unde, sunt porro ut praesentium quidem rerum. Itaque doloremque nostrum praesentium illo dolore voluptas veritatis rerum quibusdam, a, id quos distinctio error libero blanditiis unde. Fugit aperiam mollitia temporibus laborum est, nemo dolores nisi velit illo consectetur, ducimus natus. Et quibusdam ea eos itaque dolores quas dolore odio tempora ducimus sed pariatur voluptatibus earum consequuntur repellat nobis quidem dignissimos saepe laudantium adipisci, deserunt excepturi. Eius ipsam adipisci autem officiis, repellendus id, reprehenderit iusto modi, ut sapiente non corrupti! Reiciendis odit quod blanditiis quis. Architecto corporis sed eaque animi dolorem natus. Fuga magnam reprehenderit recusandae assumenda praesentium, eligendi facere dicta quasi qui repellat perferendis eos fugiat est suscipit repellendus accusamus excepturi, ratione expedita commodi unde dolore sed optio. Qui accusantium aliquid nobis nostrum! Ex quidem temporibus ullam laudantium sapiente labore possimus odit sequi hic optio omnis pariatur fugiat accusamus, harum veritatis quo! Doloremque velit cumque tenetur recusandae dolorem nulla nobis repudiandae a deleniti amet beatae, laborum at ut, neque asperiores maiores, placeat nihil perspiciatis unde rerum libero numquam. Magni quibusdam vitae modi non commodi quasi, exercitationem iusto voluptates harum natus repudiandae inventore, at asperiores id necessitatibus cupiditate dolorem fugit error praesentium! Incidunt architecto nesciunt dolorem amet ea laborum asperiores placeat! Aperiam voluptatem ea ipsam eos! Nobis, tenetur, laboriosam facere in sapiente dicta repellat velit, quibusdam architecto facilis aliquid recusandae libero deserunt quod. Quasi unde laborum labore earum id neque, aperiam sunt numquam officiis accusantium hic quia vero distinctio adipisci blanditiis explicabo doloribus molestias sequi magnam quas, eos ratione nesciunt quis nulla. Adipisci, illum alias nisi beatae totam ullam quibusdam aperiam ratione quasi explicabo nam assumenda fuga ut voluptas unde sint, recusandae nulla quaerat, rerum corrupti dolorem? Voluptatum inventore laborum non iure atque asperiores esse harum, quod ea! Sapiente temporibus quia hic ex sed similique sit maxime assumenda quod commodi itaque facere, natus quidem, atque nam! Soluta natus nesciunt iure aliquid, sunt hic modi ratione tenetur. Voluptatem, labore animi similique, atque fugit nihil odit ratione magni voluptate quasi amet perferendis recusandae eius omnis in ullam, hic voluptas dolorem inventore! Quisquam eaque culpa distinctio! Labore eius ullam beatae quas maiores facere voluptatum a impedit. Dolorem neque sapiente nulla dolor tempore consequatur architecto voluptate!</p>
            </main>
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard
