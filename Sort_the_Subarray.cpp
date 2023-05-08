#include<bits/stdc++.h>
using namespace std;

#define ll int64_t
#define endl "\n"
const ll mod=998244353;
const ll INF = 1e16;
#define all(x) x.begin(),x.end()


void solve()
{ 
    ll n;
    cin>>n;

    vector<ll>a(n),b(n);
    for(int i=0;i<n;i++)cin>>a[i];
    for(int i=0;i<n;i++)cin>>b[i];
    int i=0,j=n-1;
    for(int k=0;k<n;k++){
        if(a[k]!=b[k]){
            i=k;
            break;
        }
    }
     for(int k=n-1;k>=0;k--){
        if(a[k]!=b[k]){
            j=k;
            break;
        }
    }
    vector<ll>tp;
    for(int k=i;k<=j;k++)tp.push_back(a[k]);
    sort(all(tp));
    // cout<<"new array"<<endl;
    // for(auto c:tp)cout<<c<<" ";cout<<endl; 
    int prev_i=tp.front(),prev_j=tp.back();
    //  cout<<"ind "<<i<<" "<<j<<endl;
    for(int k=i-1;k>=0;k--){
        if(a[k]<=prev_i and a[k]==b[k]){
            i=k;
            prev_i=a[k];
        }else{
            break;
        }
    }
    for(int k=j+1;k<n;k++){
        if(a[k]>=prev_j and a[k]==b[k]){
            j=k;
            prev_j=a[k];
        }else{
            break;
        }
    }
    cout<<i+1<<" "<<j+1<<endl;


}

int main(){
    ios_base::sync_with_stdio(false); cin.tie(NULL);cout.tie(NULL);
    int t=1;
    cin>>t;
    while(t--) {
         solve();
    }
    return 0; 
}