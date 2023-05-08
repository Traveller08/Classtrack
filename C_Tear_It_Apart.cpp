#include<bits/stdc++.h>
using namespace std;

#define ll int64_t
#define endl "\n"
const ll mod=998244353;
const ll INF = 1e16;
#define all(x) x.begin(),x.end()

ll msb(ll n){
    ll ans=0;
    while(n>0){
        n/=2;
        ans++;
    }
    return ans;
}
void solve()
{ 
    string s;
    cin>>s;
    ll n=s.size();
    ll ans_f=n;
    for(char c='a';c<='z';c++){
        ll cnt=0,ans=0;
        for(auto u:s){
            ans=max(ans,cnt);
            if(u!=c){
                cnt++;
            }else{
                
                cnt=0;
            }
            ans=max(ans,cnt);
        }
        
       
        ans_f=min(msb(ans), ans_f);
    }
    cout<<ans_f<<endl;
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