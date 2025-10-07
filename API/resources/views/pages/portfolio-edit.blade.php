


@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <h6 class="display-6 fw-bold text-body-emphasis">Edit Portfolio</h6>
        
        <div class="col-md-8 mt-4">
            <form action="{{ route('portfolio.update', $portfolio->id) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                
                <div class="form-group mb-3">
                    <label for="event_title" class="form-label">Event Name</label>
                    <input type="text" name="event_title" class="form-control" value="{{ old('event_title', $portfolio->event_title) }}" required>
                    @error('event_title')
                        <div class="text-danger">{{ $message }}</div>
                    @enderror
                </div>
                
                <div class="form-group mb-3">
                    <label for="description" class="form-label">Description</label>
                    <input type="text" name="description" class="form-control" value="{{ old('description', $portfolio->description) }}" placeholder="less than 7 words" required>
                    @error('description')
                        <div class="text-danger">{{ $message }}</div>
                    @enderror
                </div>
                
                <div class="form-group mb-4">
                    <label for="images" class="form-label">Add More Images</label>
                    <input type="file" id="uploadPortfolio" name="images[]" class="form-control" multiple>
                    <small class="text-muted">Select additional images to add to this portfolio (optional)</small>
                    @error('images.*')
                        <div class="text-danger">{{ $message }}</div>
                    @enderror
                </div>
                
                <!-- Current Images -->
                <div class="mb-4">
                    <h6>Current Images</h6>
                    @if($portfolio->images->count() > 0)
                    <div class="row">
                        @foreach($portfolio->images as $image)
                        <div class="col-6 col-md-3 mb-3">
                            <div class="position-relative">
                                <img src="{{ asset('storage/' . $image->image_path) }}" 
                                     class="img-fluid rounded" alt="Portfolio Image" 
                                     style="height: 120px; width: 100%; object-fit: cover;">
                                <div class="position-absolute top-0 end-0 bg-dark bg-opacity-50 rounded-bottom-start p-1">
                                       
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                    @else
                    <p class="text-muted">No images in this portfolio.</p>
                    @endif
                </div>
                
                <div class="d-flex gap-2">
                    <button type="submit" class="btn btn-danger">Update Portfolio</button>
                    <a href="{{ route('portfoliopage') }}" class="btn btn-outline-secondary">Cancel</a>
                </div>
            </form>
        </div>
    </div>
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