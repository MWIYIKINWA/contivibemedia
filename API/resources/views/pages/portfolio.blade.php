@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <h6 class="display-6 fw-bold text-body-emphasis">Portfolio</h6>
        
        <!-- Button trigger modal -->
        <div class="col-md-4 mt-5">
            <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#portfoliomodal">
                <i class="fas fa-plus"></i>
                Upload Portfolio Images
            </button>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="portfoliomodal" tabindex="-1" aria-labelledby="portfoliomodalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="portfoliomodalLabel">Add Portfolio</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action="{{ route('portfolio.store') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="event_title">Event Name</label>
                                <input type="text" name="event_title" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="description">Simple Description</label>
                                <input type="text" name="description" class="form-control" placeholder="less than 7 words" required>
                            </div>
                            <div class="mt-2 form-row">
                                <div class="form-group col-md-12">
                                    <input type="file" id="uploadPortfolio" name="images[]" multiple required>
                                </div>
                            </div>
                            <button type="submit" class="mt-3 btn btn-danger mx-auto">Publish</button>
                        </div>
                    </form>
                    <div class="modal-footer">
                        <small class="mx-auto">Data submitted here is published automatically on the main website</small>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Display Portfolios -->
    @foreach($portfolios as $portfolio)
    <div class="row mt-5">
        <div class="container">
            <div class="row">
                {{-- <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h6 class="font-bold display-6">{{ $portfolio->event_title }}</h6>
                        <p>{{ $portfolio->description }}</p>
                    </div>
                    <form action="{{ route('portfolio.destroy', $portfolio->id) }}" method="POST" class="d-inline">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-sm btn-outline-danger" onclick="return confirm('Delete entire portfolio?')">
                            <i class="fas fa-trash"></i> 
                        </button>
                    </form>
                </div> --}}

                <div class="d-flex justify-content-between align-items-center">
    <div>
        <h6 class="font-bold display-6">{{ $portfolio->event_title }}</h6>
        <p>{{ $portfolio->description }}</p>
    </div>
    <div class="d-flex gap-2">
        <!-- Edit Button -->
        <a href="{{ route('portfolio.edit', $portfolio->id) }}" class="btn btn-sm btn-outline-primary">
            <i class="fas fa-edit"></i>
        </a>
        <!-- Delete Button -->
        <form action="{{ route('portfolio.destroy', $portfolio->id) }}" method="POST" class="d-inline">
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-sm btn-outline-danger" onclick="return confirm('Delete entire portfolio?')">
                <i class="fas fa-trash"></i> 
            </button>
        </form>
    </div>
</div>
                
                @foreach($portfolio->images as $image)
                <div class="col-6 col-md-2 mb-4">
                    <div class="position-relative">
                        <img  src="{{ asset('storage/' . $image->image_path) }}"
                             class="img-fluid rounded" alt="Portfolio Image" style="height: 150px; object-fit: cover;"/>
                        <div class="position-absolute top-0 end-0 bg-dark bg-opacity-50 rounded-bottom-start p-1">
                            <form action="{{ route('portfolio.image.destroy', $image->id) }}" method="POST" class="d-inline">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-sm p-0 border-0" onclick="return confirm('Delete this image?')">
                                    <i class="fa fa-times text-light" title="Delete"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>
    <hr>
    @endforeach
</div>

@include('layouts.footer')

<script>
  $(document).ready(function () {
    $("#uploadPortfolio").fileinput({
      theme: "fas",
      maxFileCount: 10,
      allowedFileTypes: ['image'],
      showCancel: false,
      showUpload: false,
      showRemove: false,
      overwriteInitial: false,
    });
  });
</script>
@endsection