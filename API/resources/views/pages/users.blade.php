@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <h6 class="display-6 fw-bold text-body-emphasis">Manage System Users</h6>

        {{-- FEEDBACK --}}
        {{-- ERROR --}}
        @if ($errors->any())
            <div class="alert alert-danger mt-10" role="alert" >
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        {{-- SUCCESS --}}
        @if(session('success'))
            <div class="alert alert-success alert-dismissible fade show mt-8" role="alert">
                {{ session('success') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        @endif

        {{-- EXCEPTION --}}
        @if(session('danger'))
            <div class="alert alert-danger alert-dismissible fade show mt-8" role="alert">
                {{ session('danger') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        @endif

        <!-- Button trigger modal -->
        <div class="col-md-4 mt-5">
            <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#usermodal">
                <i class="fas fa-plus"></i> Create User
            </button>
        </div>

        <!-- Create Modal -->
        <div class="modal fade" id="usermodal" tabindex="-1" aria-labelledby="usermodalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="usermodalLabel">Add a new user</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="/create_adminuser" method="POST" >
                            @csrf
                            <div class="form-group">
                                <label for="name">Name *</label>
                                <input type="text" name="name" class="form-control" id="name" required>
                            </div>
                            <div class="form-group mt-2">
                                <label for="role">Role *</label>
                                <select name="role" class="form-control" required>
                                    <option value="admin">Administrator</option>
                                    <option value="author" selected>Author</option>
                                </select>
                            </div>
                            <div class="form-group mt-1">
                                <label for="email">Email *</label>
                                <input type="email" class="form-control" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="text" class="form-control" id="phone" name="phone_number">
                            </div>
                            <button type="submit" class="mt-3 btn btn-danger mx-auto">Create User</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <small class="mx-auto">Username and Password are Created Automatically</small>
                    </div>
                </div>
            </div>
        </div>

        <!-- Edit Modal -->
        <div class="modal fade" id="editUserModal" tabindex="-1" aria-labelledby="editUserModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="editUserModalLabel">Edit User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form  method="POST" id="editUserForm">
                            @csrf
                            @method('PUT')
                            <div class="form-group">
                                <label for="edit_name">Name</label>
                                <input type="text" name="name" class="form-control" id="edit_name" required>
                            </div>
                            <div class="form-group mt-2">
                                <label for="edit_role">Role</label>
                                <select name="role" class="form-control" id="edit_role" required>
                                    <option value="admin">Administrator</option>
                                    <option value="author">Author</option>
                                    <option value="inactive">In-Active</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="edit_email">Email</label>
                                <input type="email" class="form-control" id="edit_email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="edit_phone">Phone Number</label>
                                <input type="text" class="form-control" id="edit_phone" name="phone">
                            </div>
                            <button type="submit" class="mt-3 btn btn-danger mx-auto">Update User</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <table class="table mt-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Date Created</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($users as $user)
                    <tr>
                        <th scope="row">{{ $loop->iteration }}</th>
                        <td>{{ $user->name }}</td>
                        <td><small>{{ $user->email }}</small></td>
                       <td>
                        <span class="badge 
                            {{ $user->role === 'admin' ? 'bg-danger' : 
                            ($user->role === 'inactive' ? 'bg-secondary' : 'bg-primary') }} 
                            rounded-pill">
                            {{ ucfirst($user->role) }}
                        </span>
                    </td>
                        <td><small>{{ $user->created_at->format('M d, Y') }}</small></td>
                        <td>
                            {{-- edit --}}
                            <a href="#" class="edit-user"
                                data-bs-toggle="modal" 
                                data-bs-target="#editUserModal"
                                data-id="{{ $user->id }}"
                                data-name="{{ $user->name }}"
                                data-email="{{ $user->email }}"
                                data-phone="{{ $user->phone_number }}"
                                data-role="{{ $user->role }}">
                                <i class="fas fa-pen text-primary"></i>
                            </a>
                            {{-- delete --}}
                             <form id="delete-form-{{ $user->id }}" action="/destroy_adminuser/{{ $user->id }}" method="POST" style="display:inline;">
                @csrf
                @method('DELETE')
              </form>
        <i class="fa fa-trash text-danger mx-3" onclick="document.getElementById('delete-form-{{ $user->id }}').submit();"></i>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
   
    const editButtons = document.querySelectorAll('.edit-user');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const userId = this.getAttribute('data-id');
            const userName = this.getAttribute('data-name');
            const userEmail = this.getAttribute('data-email');
            const userPhone = this.getAttribute('data-phone');
            const userRole = this.getAttribute('data-role');

            document.getElementById('edit_name').value = userName;
            document.getElementById('edit_email').value = userEmail;
            document.getElementById('edit_phone').value = userPhone;
            document.getElementById('edit_role').value = userRole;

          
            document.getElementById('editUserForm').action = `/edit_adminuser/${userId}`;
        });
    });
});
</script>

@include('layouts.footer')
@endsection