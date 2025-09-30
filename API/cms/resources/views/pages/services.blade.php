

@extends('layouts.app')

@section('content')

  <div class="container">

    {{-- add content --}}
    <div class="row">
        
       <h6 class="display-6 fw-bold text-body-emphasis">Services</h6>


           {{-- Feedback Flash alert --}}
              @if(session('success'))
                <div
                  class="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  {{ session('success') }}
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
             @endif


                 {{-- Global error summary (optional) --}}
                  @if($errors->any())
                    <div class="alert alert-danger">
                      <ul class="mb-0">
                        @foreach($errors->all() as $err)
                          <li>{{ $err }}</li>
                        @endforeach
                      </ul>
                    </div>
                  @endif
       
       <!-- Button trigger modal -->
          <div class="col-md-4 mt-5">
            <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#servicemodal">
            <i class="fas fa-plus"></i>
              Add Service
            </button>
          </div>

            <!--Creation Modal  -->
            <div class="modal fade" id="servicemodal" tabindex="-1" aria-labelledby="servicemodalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="servicemodalLabel">Add Service</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {{-- form --}}
                    <form action="/create_service" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="form-group">
                        <label for="inputAddress">Service Title</label>
                        <input type="text" name="title" class="form-control @error('title') is-invalid @enderror" id="inputAddress">
                    </div>
                    <div class="mt-2 form-group">
                        <label for="inputAddress2">Service Description</label>
                        <textarea name="description" class="richText form-control @error('description') is-invalid @enderror" rows="5"  id="" required></textarea>
                    </div>
                    <div class="mt-2 form-row">
                        <div class="form-group col-md-12">
                        <label for="featuredImage">Featured Image (width=547,height=365)</label>
                        <input type="file" name="featured_image" class="form-control @error('featured_image') is-invalid @enderror" id="" required>
                           @error('featured_image')
                            <div class="invalid-feedback">
                              {{ $message }}
                            </div>
                          @enderror
                        </div>
                    </div>
                    <button type="submit" class="mt-3 btn btn-danger mx-auto">Publish</button>
                    </form>
                    {{-- ....... --}}
                </div>
                <div class="modal-footer">
                    <small class="mx-auto">Data submitted here is published automatically on the main website</small>
                </div>
                </div>
            </div>
            </div>

            {{-- end of creation model --}}


            <!--EDIT Modal -->
            <div class="modal fade" id="serviceeditmodal" tabindex="-1" aria-labelledby="serviceeditmodalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="serviceeditmodalLabel">Edit Service</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {{-- form --}}
                    <form  method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <input type="hidden" value="" class="form-control @error('id') is-invalid @enderror" id="service_id" >
                    <div class="form-group">
                        <label for="inputAddress">Service Title</label>
                        <input type="text" name="title" class="form-control @error('title') is-invalid @enderror" id="service_title">
                    </div>
                    <div class="mt-2 form-group">
                        <label for="inputAddress2">Service Description</label>
                        <textarea name="description" id="edit_description" class="richText form-control @error('description') is-invalid @enderror" rows="5"  id="" ></textarea>
                    </div>
                    <div class="mt-2 form-row">
                        <div class="form-group col-md-12">
                        <label for="featuredImage">Featured Image (width=547,height=365)</label>
                        <input type="file" name="featured_image" class="form-control @error('featured_image') is-invalid @enderror" id="">
                           @error('featured_image')
                            <div class="invalid-feedback">
                              {{ $message }}
                            </div>
                          @enderror
                        </div>
                    </div>
                    <button type="submit" class="mt-3 btn btn-danger mx-auto">Update Service</button>
                    </form>
                    {{-- ....... --}}
                </div>
                <div class="modal-footer">
                    <small class="mx-auto">Data submitted here is published automatically on the main website</small>
                </div>
                </div>
            </div>
            </div>

            {{-- end of edit model --}}
          
    </div>


   <div class="row">
{{-- table --}}
<table class="table mt-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Service Title</th>
      {{-- <th scope="col">Image</th> --}}
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>

   @foreach ($services as $service)

       <tr>
      <th scope="row">{{ $loop->iteration }}</th>
      <td>{{$service->title}}</td>
  
       <td>
        {{-- edit --}}
         <div class="d-flex">
                    <a href="#"  
                  data-bs-toggle="modal" 
                  data-bs-target="#serviceeditmodal"
                  data-id="{{ $service->id }}"
                  data-title="{{ $service->title }}"
                  data-description="{!! e($service->description) !!}">
                  <i class="fas fa-pen"></i>
               </a>  
               {{-- delete --}}
               <form id="delete-form-{{ $service->id }}" action="/delete_service/{{ $service->id }}" method="POST" style="display:inline;">
                @csrf
                @method('DELETE')
              </form>
        <i class="fa fa-trash text-danger mx-3" onclick="document.getElementById('delete-form-{{ $service->id }}').submit();"></i>
  
         </div>
        </td>
    </tr>
     
   @endforeach


  </tbody>
</table>
{{-- ---- --}}
    {{-- <td>  @if($service->featured_image)
          <img height="30" width="10" style="border-radius: 50%" src="{{ asset('storage/' . $service->featured_image)}}"
               class="card-img-top"
               alt="{{ $service->title }}">
        @endif</td> --}}
   </div>


  </div>
@include('layouts.footer')
 
  <script>
    // TinyMCE init 
    tinymce.init({
      selector: 'textarea.richText',
      license_key: 'gpl',
        plugins: 'advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table emoticons wordcount',
        toolbar: 'undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | preview fullscreen',
      menubar: false,
      inline: false,
      branding: false,
      toolbar_mode: 'wrap' ,
      height: 300
    });

    document.addEventListener('DOMContentLoaded', function() {
      const editModal = document.getElementById('serviceeditmodal');
      editModal.addEventListener('show.bs.modal', e => {
        const btn         = e.relatedTarget;
        const id          = btn.dataset.id;
        const title       = btn.dataset.title;
        const description = btn.dataset.description;

        // Grab the form and its fields inside the modal
        const form  = editModal.querySelector('form');
        const title_input = document.getElementById('service_title');
        const id_input = document.getElementById('service_id');
        const area = document.getElementById('edit_description');


        // Update the form action
        form.action = `/edit_service/${id}`;

        // Populating the fields
        title_input.value = title;
        id_input.value = id;

        // TinyMCE on this textarea:
        if (tinymce.get(area.id)) {
          tinymce.get(area.id).setContent(description);
        } else {
          area.value = description;
        }
      });
    });
  </script>
</body>

@endsection