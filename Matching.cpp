#include<bits/stdc++.h>
using namespace std;

#define ll int64_t
#define endl "\n"
const ll mod=998244353;
const ll INF = 1e16;
#define all(x) x.begin(),x.end()


void solve()
{ 
    string s;
    cin>>s;

    ll n=s.size();
    ll cnt=0;
    for(auto c:s){
        if(c=='?')cnt++;
    }
    ll ans=1;
    if(s[0]=='0'){
        cout<<0<<endl;
        return;
    }
    if(cnt>0)
    if(s[0]=='?'){
        ans=9;
        
    }else{
        ans=10;
    }
    for(int i=1;i<cnt;i++)ans*=10;
    cout<<ans<<endl;
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