import * as BookmarkService from "../services/bookmark-service";

describe('can create bookmark with REST API', () => {
  // TODO: implement this

  test('can create bookmark with REST API', async () => {

    const uid= '6359de6091bbeb778a1bd617'
    const tid='6354bb867c06cb205a0e0caa';
     const createBookmark = await BookmarkService.createBookmark(uid,tid)
     expect(uid).toEqual(createBookmark.bookmarkedBy);   
     expect(tid).toEqual(createBookmark.bookmarkedTuit);
     const deletedBookmark = await BookmarkService.deleteBookmark(uid,tid);

  });


});

describe('can delete bookmark wtih REST API', () => {

  test('can delete bookmark with REST API', async () => {

    const uid= '6359de6091bbeb778a1bd617'
    const tid='6354bb867c06cb205a0e0caa';
     const createBookmark = await BookmarkService.createBookmark(uid,tid)
     expect(uid).toEqual(createBookmark.bookmarkedBy);   
     expect(tid).toEqual(createBookmark.bookmarkedTuit);
     const deletedBookmark = await BookmarkService.deleteBookmark(uid,tid);
     expect(deletedBookmark.deletedCount).toEqual(1); 

  });

});

describe('can retrieve bookmark of a user REST API', () => {
  
  test('can create tuit with REST API', async () => {

   /*   const createdTuit= await TuitService.createTuit(userId,oldTuit);
      expect(createdTuit.tuit).toEqual(oldTuit.tuit);
      expect(createdTuit.postedBy).toEqual(userId);
     const lookedUpTuitById= await TuitService.findTuitById(createdTuit._id)
     expect(createdTuit.tuit).toEqual(lookedUpTuitById.tuit);
      expect(lookedUpTuitById.postedBy).toEqual(userId);
      const deletedTuit= await TuitService.deleteTuit(createdTuit._id);
     expect(deletedTuit.data.deletedCount).toEqual(1);
     */
    const uid= '6359de6091bbeb778a1bd617'
    const tids=['6354bb867c06cb205a0e0caa', '6393e39904d41f2b8dc21241', '6393e05304d41f2b8dc21150'];


    for(let i=0;i<tids.length;i++){
       const createdBookmark = await BookmarkService.createBookmark(uid,tids[i]);
    }

   const allBookmarks = await BookmarkService.findTuitsByUser(uid); 
   let count=0;
   for(let i=0;i<allBookmarks.length;i++){
    expect(uid).toEqual(allBookmarks[i].bookmarkedBy);  
    //
    if(tids.indexOf(allBookmarks[i].bookmarkedTuit!==null&&allBookmarks[i].bookmarkedTuit._id)!==-1){ 
        count++;
    }
   }

   expect(count>=3).toEqual(true);

    for(let i=0;i<tids.length;i++){

        const deletedBookmark = await BookmarkService.deleteBookmark(uid,tids[i]);
 
     }

  });


});
