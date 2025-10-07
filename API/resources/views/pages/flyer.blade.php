@extends('layouts.app')

@section('title', 'Home Page Flyer')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <h4>Flyer Management</h4>
                </div>

                <div class="card-body">
                    @if (session('success'))
                        <div class="alert alert-success">
                            {{ session('success') }}
                        </div>
                    @endif

                    @if($flyer)
                        <div class="mb-4">
                            <h5>Current Flyer</h5>
                            <div class="d-flex justify-content-between align-items-center p-3 border rounded">
                                <div>
                                    <i class="fas fa-file-pdf text-danger fa-2x me-3"></i>
                                    <span>{{ $flyer->original_name }}</span>
                                    <small class="text-muted d-block">
                                        {{ number_format($flyer->file_size / 1024, 2) }} KB
                                    </small>
                                </div>
                                <div>
                                    <a href="{{ asset('storage/' . $flyer->file_path) }}" 
                                       target="_blank" 
                                       class="btn btn-outline-primary btn-sm me-2">
                                        <i class="fas fa-eye"></i> View
                                    </a>
                                    <a href="{{ route('flyer.download') }}" 
                                       class="btn btn-outline-success btn-sm">
                                        <i class="fas fa-download"></i> Download
                                    </a>
                                </div>
                            </div>
                        </div>
                    @endif

                    <div class="upload-section">
                        <h5>
                            {{ $flyer ? 'Replace Flyer' : 'Upload Flyer' }}
                        </h5>
                        <form action="{{ route('flyer.store') }}" 
                              method="POST" 
                              enctype="multipart/form-data">
                            @csrf

                            <div class="mb-3">
                                <label for="pdf_file" class="form-label">Select File (PDF or Image)</label>
                                <input type="file" 
                                       class="form-control @error('pdf_file') is-invalid @enderror" 
                                       name="pdf_file" 
                                       accept=".pdf,.jpg,.jpeg,.png,.webp">
                                @error('pdf_file')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>

                            <button type="submit" class="btn btn-danger">
                                <i class="fas fa-upload"></i> 
                                {{ $flyer ? 'Replace Flyer' : 'Publish Flyer' }}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection