#include<bits/stdc++.h>
using namespace std;

#define ll int64_t
#define endl "\n"
const ll mod=998244353;
const ll INF = 1e16;
#define all(x) x.begin(),x.end()

bool validate_h_and_w(vector<pair<ll,ll>>val,ll h,ll w){
    // cout<<"start "<<h<<" "<<w<<endl;
    int n=val.size();
     multiset<pair<ll,ll>>m1,m2;
   for(int i=0;i<n;i++){
    m1.insert(val[i]);
    m2.insert({val[i].second,val[i].first});
   }
   
   while(1){
    if(h<=0 or w<=0){
        break;
    }
     bool f=0;
     if(!m1.empty()){
        auto it=(--m1.end());
        if(it->first==h and it->second==w){
            //   cout<<"w "<<h<<" "<<w<<" "<<it->first<<" "<<it->second<<endl;
              w-=it->second;
              h-=it->first;
               m2.erase(m2.find({it->second,it->first}));
            m1.erase(it);
            break;
        }
        if(it->first==h){
            //  cout<<"h "<<h<<" "<<w<<" "<<it->first<<" "<<it->second<<endl;
            w-=it->second;
            f=1;
            m2.erase(m2.find({it->second,it->first}));
            m1.erase(it);
        }
     }
      if(!m2.empty()){
        auto it=(--m2.end());
        if(it->first==w and it->second==h){
            //   cout<<"w "<<h<<" "<<w<<" "<<it->first<<" "<<it->second<<endl;
              h-=it->second;
              w-=it->first;
              m1.erase(m1.find({it->second,it->first}));
            m2.erase(it);
            break;
        }
        if(it->first==w){
            //   cout<<"w "<<h<<" "<<w<<" "<<it->first<<" "<<it->second<<endl;
            h-=it->second;
            f=1;
            m1.erase(m1.find({it->second,it->first}));
            m2.erase(it);
        }
     }
    
     if(!f){
        break;
     }
   }
    // cout<<"final "<<h<<" "<<w<<endl;
   return (h==0 and w==0 and m1.empty() and m2.empty());

}
void solve()
{ 
    ll n;
    cin>>n;

   vector<pair<ll,ll>>val(n);
   for(int i=0;i<n;i++)cin>>val[i].first>>val[i].second;

   ll maxh=0,maxw=0;
   for(int i=0;i<n;i++){
    maxh=max(maxh,val[i].first);
    maxw=max(maxw,val[i].second);
   }
   multiset<pair<ll,ll>>m1,m2;
   for(int i=0;i<n;i++){
    m1.insert(val[i]);
    m2.insert({val[i].second,val[i].first});
   }
   ll h_case1=maxh,w_case1=0;
   while(1){
        if(m1.empty())break;
        auto it=(--m1.end());
        if(it->first==maxh){
            w_case1+=it->second;
            m1.erase(it);
        }else{
            break;
        }
   }
   ll max_w_rem_case1=0;
   for(auto c:m1){
    max_w_rem_case1=max(max_w_rem_case1,c.second);
   }
   w_case1+=max_w_rem_case1;


  ll h_case2=0,w_case2=maxw;
   while(1){
        if(m2.empty())break;
        auto it=(--m2.end());
        if(it->first==maxw){
            h_case2+=it->second;
            m2.erase(it);
        }else{
            break;
        }
   }
   ll max_h_rem_case2=0;
   for(auto c:m2){
    max_h_rem_case2=max(max_h_rem_case2,c.second);
   }
   h_case2+=max_h_rem_case2;

   set<pair<ll,ll>>ans_s;
   if(validate_h_and_w(val,h_case1,w_case1)){
    ans_s.insert({h_case1,w_case1});
   }
   if(validate_h_and_w(val,h_case2,w_case2)){
    ans_s.insert({h_case2,w_case2});
   }

   cout<<ans_s.size()<<endl;
   for(auto c:ans_s){
    cout<<c.first<<" "<<c.second<<endl;
   }
//    cout<<h_case1<<" "<<w_case1<<" "<<h_case2<<" "<<w_case2<<endl;


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