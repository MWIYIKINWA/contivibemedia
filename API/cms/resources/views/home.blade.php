@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12 mt-5">
 

<h5 class="display-6 fw-bold text-body-emphasis">Hello, {{ Auth::user()->name }} !</h5>
    <div class="col-lg-12">
      <p class="lead mb-4">This your admin panel. Manage your content from here</p>
    </div>

            {{-- //cards --}}
<div class="container">
    <div class="row ">
        <div class="col-xl-4 col-lg-4 mt-3">
           <a href="{{route('servicepage')}}" style="text-decoration: none">
                        <div class="card l-bg-cherry">
                <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large"><i class="fas fa-briefcase"></i></div>
                    <div class="mb-4">
                        <h5 class="card-title mb-0">Services</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                        <div class="col-7 d-flex">
                            <h2 class="d-flex align-items-center mb-0">
                                {{ $serviceCount }}
                            </h2>
                            <span class="mt-1 mx-2">Posts</span>
                        </div>
                        <div class="col-5 text-right">
                            <span>Manage <i class="fa fa-arrow-right"></i></span>
                        </div>
                    </div>
                    <div class="progress mt-1 " data-height="8" style="height: 8px;">
                        <div class="progress-bar bg-danger" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                    </div>
                </div>
            </div>
           </a>
        </div>
        <div class="col-xl-4 col-lg-4 mt-3">
       <a href="{{route('sectornewspage')}}" style="text-decoration: none">     
        <div class="card">
                <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large"><i class="fas fa-users"></i></div>
                    <div class="mb-4">
                        <h5 class="card-title mb-0">Sector News</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                        <div class="col-7 d-flex">
                            <h2 class="d-flex align-items-center mb-0">
                                {{ $newsPostCount }} 
                            </h2>
                            <span class="mt-1 mx-2">Posts</span>
                        </div>
                        <div class="col-5 text-right">
                            <span>Manage <i class="fa fa-arrow-right"></i></span>
                        </div>
                    </div>
                    <div class="progress mt-1 " data-height="8" style="height: 8px;">
                        <div class="progress-bar bg-primary" role="progressbar" data-width="25%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                    </div>
                </div>
            </div></a>
        </div>
        <div class="col-xl-4 col-lg-4 mt-3">
            <a href="{{route('portfoliopage')}}" style="text-decoration: none">
            <div class="card ">
                <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large"><i class="fas fa-ticket-alt"></i></div>
                    <div class="mb-4">
                        <h5 class="card-title mb-0">Portfolio</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                        <div class="col-7 d-flex">
                            <h2 class="d-flex align-items-center mb-0">
                                {{ $portfolioCount }}
                            </h2>
                            <span class="mt-1 mx-2">Images</span>
                        </div>
                        <div class="col-5 text-right">
                            <span>Manage <i class="fa fa-arrow-right"></i></span>
                        </div>
                    </div>
                    <div class="progress mt-1 " data-height="8" style="height: 8px;">
                        <div class="progress-bar bg-danger" role="progressbar" data-width="25%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                    </div>
                </div>
            </div>
            </a>
            </div>
        </div>
    </div>
</div>


{{-- end of cards --}}

        </div>
    </div>
</div>
@include('layouts.footer')
@endsection


