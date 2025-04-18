import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, updateDoc, doc } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private postsCol = collection(this.firestore, 'posts');

  constructor(private firestore: Firestore) {}

  getAll() {
    return collectionData(this.postsCol, { idField: 'id' });
  }

  create(post: any) {
    return addDoc(this.postsCol, { ...post, claimed: false });
  }

  claim(id: string) {
    const ref = doc(this.firestore, `posts/${id}`);
    return updateDoc(ref, { claimed: true });
  }
}
