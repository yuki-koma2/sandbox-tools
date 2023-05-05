// 次のinterfaceに従って、クラスCounterを作成してください。このクラスは、Privateプロパティ_countを持ち、Publicメソッドincrementでカウントを増やし、PublicメソッドgetCountでカウントを取得できるようにしてください。
interface ICounter {
    increment(): void;
    getCount(): number;
}