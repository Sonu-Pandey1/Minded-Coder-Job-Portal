import EmailVerifaction from "../Components/EmailVerifaction"
import "./Dashboard.scss"
import Sidebar from "./Sidebar"


function Dashboard() {
  return (
    <>
      <div className="Dashboard-Container container-fulid">
        <div className="row g-0">
          <div className="col-2 bg-white shadow-lg ">
            <div className="bg-info">
              <Sidebar />
            </div>
          </div>
          <div className="col-10 py-5 px-5 ">
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
                <div className="row gap-5 g-0">
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
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem est explicabo sint architecto mollitia voluptatem distinctio sed delectus reiciendis nihil exercitationem modi ab tenetur nam, quisquam aliquam facilis velit voluptatum fugiat? Autem, qui ipsam quo rerum ut sed architecto dignissimos, itaque ad voluptatibus aut explicabo sit quae. Quibusdam impedit odio veniam laboriosam, exercitationem eaque quaerat, quam quos sint quae debitis, esse consequatur eius a quasi recusandae eos at accusantium temporibus illum natus? Quod, sunt aspernatur earum ad nulla dolor nisi, tempore maxime omnis id laboriosam odit iste consequatur. Et, aspernatur voluptatibus itaque saepe libero quo sit voluptates. Unde, non error.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit repellat at id necessitatibus in quos fuga, doloremque quam reiciendis earum molestiae iure voluptatem, vitae ipsum consequatur obcaecati ex officiis suscipit ea. Perferendis praesentium eligendi itaque dicta harum! Inventore iure similique voluptas accusamus sed ab dolore impedit perspiciatis eius numquam earum laborum necessitatibus dolores iste amet, quo nulla? Dolorem praesentium dicta laudantium, sed minima asperiores, amet inventore tenetur doloremque consequuntur, nisi laboriosam illo tempore dolores doloribus eaque exercitationem officia provident consectetur hic deleniti soluta ut commodi! Quam voluptatibus, officia ullam exercitationem delectus eos minus maiores est consequuntur, aliquid omnis aperiam cupiditate laudantium, molestias facere? Quo doloremque officiis sapiente quae eaque nulla, facilis veritatis magni maiores sunt qui officia placeat amet nisi repellendus illo. Modi eveniet placeat exercitationem, quasi blanditiis praesentium aspernatur dolorum debitis animi quaerat distinctio deleniti. Nostrum fuga ea inventore quaerat dolorem maiores beatae recusandae harum quos, nulla iusto eius veritatis cumque ducimus fugiat quam modi quasi consequuntur earum nemo officia atque voluptatibus. Sint, non earum! Eaque, quae totam sit eos aliquid officia dignissimos porro reiciendis minus obcaecati, vitae dolore quibusdam aut eligendi asperiores commodi, non fugit ipsa adipisci! Tenetur vitae recusandae autem doloribus ab molestiae, neque numquam magni sapiente, repellendus quas quasi. Voluptates esse, ducimus animi accusantium veniam quam possimus nam obcaecati corporis perspiciatis explicabo itaque, repellat maxime. Delectus inventore commodi, illum ex ullam adipisci facere. Accusantium aliquam quidem, officia magnam culpa sunt fugiat repellendus eos eius odio nisi maiores repudiandae vitae sed sint nihil voluptatum consectetur voluptatibus totam placeat dolorem? Omnis magnam, soluta blanditiis id autem dolores magni tenetur est temporibus vel repudiandae velit quos odit aliquam rerum inventore tempore. Cum, reprehenderit cumque fugit ipsum culpa harum obcaecati odio enim totam delectus odit, nisi unde dolorem exercitationem quas dicta aspernatur vero aut corporis. Officia blanditiis dicta odit excepturi nihil impedit reiciendis itaque dolorem aspernatur iure voluptatibus, omnis quo optio ratione delectus doloremque dolor libero laborum? Quas, dolorum officia commodi sit pariatur suscipit facere eligendi aspernatur sunt necessitatibus. Possimus eaque debitis beatae earum delectus incidunt accusantium? Id ex aspernatur obcaecati iste minima distinctio perferendis mollitia velit, nemo neque. Exercitationem, quae corrupti? Error repellat dignissimos numquam enim quam sit accusamus ex sequi excepturi sint unde dolor, tempora corporis debitis fugit asperiores quasi ab aliquid nobis eligendi. Rem reiciendis delectus dolores neque deleniti, nam minus odio! Reiciendis debitis fugit animi, quam sit inventore, qui fugiat suscipit saepe consequuntur iste, aliquid magni. Repudiandae id laudantium ipsa suscipit totam facere eum voluptatibus, iure ex aliquid saepe, repellat numquam aliquam debitis illum dignissimos fugit architecto? Magnam, aperiam eligendi? Aut exercitationem officiis hic quia sit dicta ratione aspernatur necessitatibus distinctio dolor animi deleniti minima, quae ut a? Ut perspiciatis veritatis rerum a ex blanditiis ratione quo odio eaque minus voluptatum reprehenderit accusamus dignissimos vel ea animi facilis officiis, facere, numquam fuga alias. Obcaecati quam provident excepturi perspiciatis ad? Repellat aut debitis, sapiente sit deleniti non soluta odit reiciendis quod molestias fugit consequatur magni nulla labore! Ipsum doloremque eos doloribus ad dolorum ab tempora, dolor voluptatem rem facere totam! Enim ullam quos ipsam consequuntur quas perspiciatis obcaecati atque deserunt, aut dolorum similique explicabo quia magnam eum perferendis iure officia asperiores architecto placeat. At veritatis, repellendus excepturi sint labore debitis. Et aspernatur maiores deserunt ipsam sapiente porro odit blanditiis, corrupti quas dolorem incidunt earum quo eius fugiat ratione dignissimos tempore ipsa. Iure, aut commodi. Excepturi accusamus id iusto nostrum optio nemo consectetur ad labore eius repudiandae, incidunt corrupti asperiores quod accusantium qui fuga repellat libero quis animi possimus inventore aut cumque! Officia, ut esse facere tenetur eos consequuntur, ratione exercitationem alias non soluta distinctio ea obcaecati quam impedit pariatur veritatis harum possimus, dolores nobis ab corporis tempora voluptate. Qui, veniam temporibus? Voluptatem corporis nulla perspiciatis hic dolorum doloribus in possimus minima. Molestias, iure quas quia ipsam libero magni debitis quidem inventore ea nobis minus doloribus animi sequi laboriosam mollitia aspernatur eveniet non modi nam! Laboriosam perferendis obcaecati quo mollitia pariatur rerum quae odit rem fugit temporibus! Ipsa tenetur maxime quod neque perferendis doloribus sapiente qui quidem. Nobis provident aspernatur tempora expedita dolor ratione omnis vero nulla. Suscipit nam obcaecati eligendi magni ipsa tempora aliquid! Alias incidunt quas reiciendis pariatur beatae maxime officia, necessitatibus a enim corrupti praesentium ad harum magni. Illum necessitatibus voluptatibus voluptatem numquam id asperiores, omnis rem enim exercitationem nulla soluta. Non possimus vitae laudantium sapiente ducimus sint. Cupiditate voluptatibus minus distinctio enim dignissimos corporis tempora tempore doloremque ipsum eligendi aperiam numquam aliquid aliquam dolorum alias voluptate, iure, amet dolor? Incidunt aspernatur fuga adipisci cum mollitia perferendis aut perspiciatis officiis porro commodi veritatis sit, maiores ea provident voluptas repellat qui nobis facilis placeat, enim quasi iste fugit molestiae. Tempora cum quas itaque nostrum voluptate magnam, voluptatum voluptates cumque nesciunt accusamus quae ad sunt ut! Tenetur totam provident error placeat similique repudiandae unde, perspiciatis non ipsum odit, iste porro deserunt, fugiat fugit libero modi? Tempora blanditiis perferendis nam explicabo. Praesentium inventore repellat quaerat, eligendi corrupti quibusdam quidem esse! Aperiam, debitis. Cumque minus doloribus accusamus? Officia fugit libero earum architecto dolorum obcaecati perspiciatis quisquam molestiae, inventore, ipsa minima temporibus tempora praesentium nisi dolorem voluptas nostrum doloribus hic quia qui. Pariatur officia delectus aliquam ipsum itaque ipsa enim dolor ratione dolores soluta. Sapiente nostrum perferendis repellat fuga laboriosam fugiat error cum odit voluptatem? Veritatis iste perspiciatis magnam delectus dolore aliquam optio tempore! Reiciendis perferendis amet maxime exercitationem aliquid nesciunt nostrum soluta ipsum et magni saepe veritatis, at laboriosam similique itaque libero fuga odio praesentium quod laudantium. Ipsum, officiis, rem dolore molestiae beatae optio iure dignissimos corporis laudantium, minima et temporibus? Nemo quo consectetur dolor. Vero dolore suscipit eius repellendus obcaecati ab asperiores in consectetur ratione. Aliquid, ipsum? Non, similique dolores optio, inventore minus soluta pariatur autem minima possimus suscipit repellendus ut doloribus facilis ab! Voluptatibus et qui adipisci, in, cumque dolore totam tempora iusto iure quae eaque porro maxime vel maiores deleniti. Ducimus molestias ut incidunt aliquid iusto quos ipsam est provident. Esse ad atque at sunt quos, debitis necessitatibus aut quidem iure et fugit dolorem ipsum ab.</p>

            </main>
            </div>
          </div>

        </div>
      </>
      )
}

      export default Dashboard
