/**
 * @file This file is used to test the bookmark service
 **/

import * as BookmarkService from "../services/bookmark-service";
import * as UserService from "../services/users-service";
import * as TuitService from "../services/tuits-service";

/**
  * Test bookmark creation
  * @param  {string} "can create bookmark with REST API" name of the test
  * @param  {function} async the function that is called
  */
describe('can create bookmark with REST API', () => {

  test('can create bookmark with REST API', async () => {

    const user= await UserService.createUser({'username': 'dummy', 'password': 'dummy'});
    const tuit= await TuitService.createTuit({'tuit':'new tuit'});
    const uid=user._id;
    const tid=tuit._id

    const createBookmark = await BookmarkService.createBookmark(uid,tid)
     expect(uid).toEqual(createBookmark.bookmarkedBy);   
     expect(tid).toEqual(createBookmark.bookmarkedTuit);
     const deletedBookmark = await BookmarkService.deleteBookmark(uid,tid);
     const deletedTuit = await TuitService.deleteTuit(tid);
     const deletedUser = await UserService.deleteUser(uid)


  });
 

});

/**
  * Test bookmark deletion
  * @param  {string} "can delete bookmark wtih REST API" name of the test
  * @param  {function} async the function that is called
  */

describe('can delete bookmark wtih REST API', () => {

  test('can delete bookmark with REST API', async () => {

    const user= await UserService.createUser({'username': 'dummy', 'password': 'dummy'});
    const tuit= await TuitService.createTuit({'tuit':'new tuit'});
    const uid=user._id;
    const tid=tuit._id
     const createBookmark = await BookmarkService.createBookmark(uid,tid)
     expect(uid).toEqual(createBookmark.bookmarkedBy);   
     expect(tid).toEqual(createBookmark.bookmarkedTuit);
     const deletedBookmark = await BookmarkService.deleteBookmark(uid,tid);
     expect(deletedBookmark.deletedCount).toEqual(1); 
     const deletedTuit = await TuitService.deleteTuit(tid);
     const deletedUser = await UserService.deleteUser(uid);

  });

});

/**
  * Test can get retrive all bookmarks of a user
  * @param  {string} "can retrieve bookmark of a user REST API" name of the test
  * @param  {function} async the function that is called
  */

describe('can retrieve bookmark of a user REST API', () => {
  
  test('can create tuit with REST API', async () => {


    const user= await UserService.createUser({'username': 'dummy', 'password': 'dummy'});
    const uid=user._id;

    const tids=[];

    for(let i=0;i<3;i++){
      const tuit= await TuitService.createTuit({'tuit':'new tuit'});
      const tid=tuit._id
      tids.push(tid);
    }


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
     for(let i=0;i<3;i++){
     let deletedTuit = await TuitService.deleteTuit(tids[i])
    }
    const deletedUser = await UserService.deleteUser(uid);

  });


});
